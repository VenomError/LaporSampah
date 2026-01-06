<script setup>
import MemberListTable from "@components/Table/Account/MemberListTable.vue";
import BtModal from "@components/BtModal.vue";
import BtInput from "@components/BtInput.vue";
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
  phone: "",
  email: "",
  password: "password",
});

const addMember = () => {
  formAdd.post(route("api.members.store"), {
    onSuccess: () => {
      modalAdd.value.close();
      formAdd.reset();
      tableRef.value.reloadTable();
    },
  });
};
</script>

<template>
  <Head title="Manajemen Member" />

  <div class="space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
          List <span class="text-green-600">Member Gonsa</span>
        </h2>
        <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest italic">
          Kelola data warga dan akumulasi poin insentif
        </p>
      </div>

      <button 
        @click="openModal" 
        class="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-green-100 hover:bg-green-700 hover:-translate-y-1 transition-all active:scale-95"
      >
        <i class="ti ti-user-plus text-lg"></i>
        Tambah Member
      </button>
    </div>

    <div class="bg-white rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <MemberListTable ref="tableRef" />
    </div>

    <BtModal title="Registrasi Member Baru" ref="modalAdd">
      <form @submit.prevent="addMember" class="space-y-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BtInput
                label="Nama Lengkap"
                placeholder="Nama Warga"
                v-model="formAdd.name"
                :error="formAdd.errors.name"
            />
            <BtInput
                label="Nomor Telepon"
                type="tel"
                placeholder="0812..."
                v-model="formAdd.phone"
                :error="formAdd.errors.phone"
            />
        </div>

        <BtInput
          label="Email Account"
          type="email"
          placeholder="warga@email.com"
          v-model="formAdd.email"
          :error="formAdd.errors.email"
        />

        <BtInput
          label="Password Akses"
          placeholder="Min. 8 Karakter"
          type="password"
          v-model="formAdd.password"
          :error="formAdd.errors.password"
          help="Default: 'password'"
        />

        <div class="flex justify-end pt-4">
          <button 
            class="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-xl" 
            type="submit"
            :disabled="formAdd.processing"
          >
            {{ formAdd.processing ? 'Menyimpan...' : 'Simpan Data Member' }}
          </button>
        </div>
      </form>
    </BtModal>
  </div>
</template>