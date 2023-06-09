<template>
    <div>
        <v-dialog v-model="dialogOpen" max-width="500px">
            <v-card>
                <v-card-title> Payback AEUSD </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            class="mb-4"
                            outline
                            label="Amount"
                            type="number"
                            v-model="amount"
                            suffix="AEUSD"
                            :error="!!error"
                            :error-messages="error"
                        ></v-text-field>
                        <v-btn
                            :loading="loadingPayBack"
                            @click.prevent="payBack()"
                            color="primary"
                            block
                        >
                            Payback
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-btn color="primary" @click="openDialog()"> Payback </v-btn>
    </div>
</template>

<script lang="ts">
import { useAeppSdk } from "@/composables";
import { useStableToken } from "@/composables/stableToken";
import { useTroveManager } from "@/composables/troveManager";
import { useAccounts } from "@/store/accounts";
import { Decimal } from "@liquity/lib-base";

import { ref } from "vue";

export default {
    setup() {
        const dialogOpen = ref(false);
        const amount = ref(0);
        const error = ref("");

        const accounts = useAccounts();
        const { contracts, onAccount } = useAeppSdk();
        const { loadActiveTrove } = useTroveManager();
        const { loadAccountStableTokenBalance } = useStableToken();

        const loadingPayBack = ref(false);

        async function payBack() {
            error.value = "";
            loadingPayBack.value = true;
            try {
                await contracts.BorrowerOperations.methods.repay_aeusd(
                    Decimal.from(amount.value).bigNumber,
                    accounts.activeAccount,
                    accounts.activeAccount,
                    {
                        onAccount: onAccount(),
                    }
                );
                await loadActiveTrove();
                await loadAccountStableTokenBalance();
                amount.value = 0;

                dialogOpen.value = false;
            } catch (_error: any) {
                error.value = _error.message;
                console.info("========================");
                console.error("error ::", _error);
                console.info("========================");
            }
            loadingPayBack.value = false;
        }

        function openDialog() {
            dialogOpen.value = true;
        }

        return {
            dialogOpen,
            amount,
            error,
            loadingPayBack,
            payBack,
            openDialog,
        };
    },
};
</script>
