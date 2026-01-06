<script setup>
import OperatorListTable from "@components/Table/Account/OperatorListTable.vue";
import BtModal from "@/Components/BtModal.vue";
import BtInput from "@/Components/BtInput.vue";
import { route } from "@route";
import { useForm, Head } from "@inertiajs/vue3";
import { ref } from "vue";

const modalAdd = ref(null);
const tableRef = ref(null);

const openModal = () => {
  modalAdd.value.open();
};

const formAdd = useForm({
  name: "",
  email: "",
  password: "password",
});

const addOperator = () => {
  formAdd.post(route("api.operators.store"), {
    onSuccess: () => {
      modalAdd.value.close();
      formAdd.reset();
      tableRef.value.reloadTable();
    },
  });
};
</script>

<template>
  <Head title="Manajemen Operator" />

  <div class="space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
          List <span class="text-green-600">Operator Lapangan</span>
        </h2>
        <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest italic">
          Kelola petugas jemput dan akses aplikasi mobile operator
        </p>
      </div>

      <button 
        @click="openModal" 
        class="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-green-100 hover:bg-green-700 hover:-translate-y-1 transition-all active:scale-95"
      >
        <i class="ti ti-user-plus text-lg"></i>
        Tambah Operator
      </button>
    </div>

    <div class="bg-white rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <i class="ti ti-truck-delivery text-[15rem]"></i>
        </div>
        <OperatorListTable ref="tableRef" />
    </div>

    <BtModal title="Daftarkan Petugas Baru" ref="modalAdd">
      <form @submit.prevent="addOperator" class="space-y-6">
        <div class="p-5 bg-blue-50 rounded-[2rem] border border-blue-100 mb-2">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                    <i class="ti ti-info-circle text-xl"></i>
                </div>
                <p class="text-[11px] font-bold text-blue-700 leading-tight">
                    Akun operator akan digunakan untuk login di aplikasi mobile penjemputan sampah.
                </p>
            </div>
        </div>

        <BtInput
          label="Nama Lengkap"
          type="text"
          placeholder="Nama Petugas Lapangan"
          v-model="formAdd.name"
          :error="formAdd.errors.name"
        />

        <BtInput
          label="Email Kerja"
          type="email"
          placeholder="operator@gonsa.id"
          v-model="formAdd.email"
          :error="formAdd.errors.email"
        />

        <BtInput
          label="Password Akses"
          placeholder="Min. 8 karakter"
          type="password"
          v-model="formAdd.password"
          :error="formAdd.errors.password"
          help="Default: 'password'"
        />

        <div class="flex justify-end pt-4">
          <button 
            class="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-green-600 transition-all active:scale-95" 
            type="submit"
            :disabled="formAdd.processing"
          >
            {{ formAdd.processing ? 'Memproses...' : 'Simpan Data Operator' }}
          </button>
        </div>
      </form>
    </BtModal>
  </div>
</template>