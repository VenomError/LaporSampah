<script setup>
import IncentiveListTable from "@components/Table/IncentiveListTable.vue";
import BtModal from "@/Components/BtModal.vue";
import BtInput from "@/Components/BtInput.vue";
import BtInputFile from "@/Components/BtInputFile.vue"; // Asumsi sudah direfactor bergaya Pop
import BtTextarea from "@/Components/BtTextarea.vue"; // Asumsi sudah direfactor bergaya Pop
import BtSelect from "@/Components/BtSelect.vue";
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
  description: "",
  image: null,
  point_required: 0,
  is_active: true,
});

const addIncentive = () => {
  formAdd.post(route("api.incentive.store"), {
    onSuccess: () => {
      modalAdd.value.close();
      formAdd.reset();
      tableRef.value.reloadTable();
    },
  });
};
</script>

<template>
  <Head title="Manajemen Insentif" />

  <div class="space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
          Katalog <span class="text-green-600">Insentif Warga</span>
        </h2>
        <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest italic">
          Atur barang atau jasa yang dapat ditukarkan dengan poin sampah
        </p>
      </div>

      <button 
        @click="openModal" 
        class="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-green-100 hover:bg-green-700 hover:-translate-y-1 transition-all active:scale-95"
      >
        <i class="ti ti-package-import text-lg"></i>
        Tambah Insentif
      </button>
    </div>

    <div class="bg-white rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <i class="ti ti-gift text-[15rem]"></i>
        </div>
        <IncentiveListTable ref="tableRef" />
    </div>

    <BtModal title="Buat Item Insentif" ref="modalAdd">
      <form @submit.prevent="addIncentive" class="space-y-5">
        <BtInputFile
          label="Foto Produk/Item"
          v-model="formAdd.image"
          :error="formAdd.errors.image"
          accept="image/*"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BtInput
                label="Nama Insentif"
                placeholder="Contoh: Sembako Paket A"
                v-model="formAdd.name"
                :error="formAdd.errors.name"
            />
            <BtInput
                label="Poin Dibutuhkan"
                type="number"
                placeholder="0"
                v-model="formAdd.point_required"
                :error="formAdd.errors.point_required"
            />
        </div>

        <BtTextarea
          label="Deskripsi Item"
          placeholder="Jelaskan detail insentif di sini..."
          v-model="formAdd.description"
          :error="formAdd.errors.description"
          rows="4"
        />

        <BtSelect
          label="Status Ketersediaan"
          v-model="formAdd.is_active"
          :error="formAdd.errors.is_active"
        >
          <option :value="true">🟢 Aktif (Dapat Ditukar)</option>
          <option :value="false">🔴 Non-Aktif (Draft/Habis)</option>
        </BtSelect>

        <div class="flex justify-end pt-4">
          <button 
            class="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-green-600 transition-all" 
            type="submit"
            :disabled="formAdd.processing"
          >
            {{ formAdd.processing ? 'Mengunggah...' : 'Simpan Insentif' }}
          </button>
        </div>
      </form>
    </BtModal>
  </div>
</template>