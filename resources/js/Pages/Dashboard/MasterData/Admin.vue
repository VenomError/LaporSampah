<script setup>
import AdminListTable from "@components/Table/Account/AdminListTable.vue";
import BtModal from "@/Components/BtModal.vue";
import BtInput from "@/Components/BtInput.vue"; // Pastikan BtInput sudah di-refactor bergaya Pop
import { Head, useForm } from "@inertiajs/vue3";
import { route } from "@route";
import { ref } from "vue";

const modalAdd = ref(null);
const tableRef = ref(null);

const openModal = () => {
  modalAdd.value.open();
};

const formAdd = useForm({
  name: "", // Menambahkan field nama jika diperlukan di backend
  email: "",
  password: "",
});

const addAdmin = () => {
  formAdd.post(route("dashboard.master-data.admin-add"), {
    onSuccess: () => {
      modalAdd.value.close();
      formAdd.reset();
      tableRef.value.reloadTable();
    },
  });
};
</script>

<template>
  <Head title="Manajemen Pengelola" />
  
    <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="relative">
            <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                List <span class="text-green-600">Administrator</span>
            </h2>
            <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest italic">
                Kelola hak akses dan akun pengelola sistem
            </p>
            <div class="absolute -left-4 top-0 w-1 h-full bg-green-500 rounded-full hidden md:block"></div>
        </div>

        <button 
            @click="openModal" 
            class="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-[1.5rem] font-black uppercase tracking-[0.1em] text-xs shadow-xl shadow-green-100 hover:bg-green-700 hover:-translate-y-1 transition-all active:scale-95"
        >
            <i class="ti ti-user-plus text-lg"></i>
            Tambah Admin Baru
        </button>
    </div>

    <div class="bg-white rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <i class="ti ti-shield-check text-[15rem]"></i>
        </div>
        
        <AdminListTable ref="tableRef" />
    </div>

    <BtModal title="Daftarkan Admin Baru" ref="modalAdd">
        <form @submit.prevent="addAdmin" class="space-y-6">
            <div class="p-5 bg-blue-50 rounded-[2rem] border border-blue-100 mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                        <i class="ti ti-info-circle text-xl"></i>
                    </div>
                    <p class="text-[11px] font-bold text-blue-700 leading-tight">
                        Pastikan email yang didaftarkan aktif. Password minimal 8 karakter untuk keamanan maksimal.
                    </p>
                </div>
            </div>

            <BtInput
                label="Alamat Email"
                type="email"
                placeholder="contoh: admin@gonsa.id"
                v-model="formAdd.email"
                :error="formAdd.errors.email"
            />

            <BtInput
                label="Kata Sandi"
                placeholder="Minimal 8 karakter"
                type="password"
                v-model="formAdd.password"
                :error="formAdd.errors.password"
            />

            <div class="flex justify-end pt-4">
                <button 
                    class="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-slate-200 hover:bg-green-600 transition-all active:scale-95" 
                    type="submit"
                    :disabled="formAdd.processing"
                >
                    <span v-if="formAdd.processing">Memproses...</span>
                    <span v-else>Simpan Akun Admin</span>
                </button>
            </div>
        </form>
    </BtModal>
</template>

<style scoped>
@reference "../../../../css/app.css";
</style>