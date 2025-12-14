<script setup>
import PageTitle from "@components/PageTitle.vue";
import IncentiveListTable from "@components/Table/IncentiveListTable.vue";
import BtModal from "@components/BtModal.vue";
import BtInput from "@components/BtInput.vue";
import BtInputFile from "@components/BtInputFile.vue";
import BtTextarea from "@components/BtTextarea.vue";
import BtSelect from "@components/BtSelect.vue";
import { route } from "@route";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const modalAdd = ref(null);
const tableRef = ref(null);
const openModal = () => {
  modalAdd.value.open();
};
const progress = ref(0);
const formAdd = useForm({
  name: "",
  description: "",
  image: null,
  point_required: 0,
  is_active: true,
});
const addOperator = () => {
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
  <PageTitle title="List Incentive">
    <button type="button" @click="openModal" class="btn btn-success">
      Tambah Incentivee
    </button>
  </PageTitle>
  <IncentiveListTable ref="tableRef" />

  <BtModal id="modal-add-operator" title="Tambah Operator" ref="modalAdd">
    <form @submit.prevent="addOperator">
      <BtInputFile
        label="Gambar"
        v-model="formAdd.image"
        :error="formAdd.errors.image"
        help="Masukkan Gambar Incentive"
        accept="image/png,image/jpg,image/jpeg,image/gif"
      />
      <BtInput
        label="Name"
        type="text"
        placeholder="Masukkan Nama"
        v-model="formAdd.name"
        :error="formAdd.errors.name"
        help="Masukkan Nama"
      />
      <BtTextarea
        label="Deskripsi"
        placeholder="Masukkan Deskripsi"
        v-model="formAdd.description"
        :error="formAdd.errors.description"
        help="Maksimal 500 karakter"
        rows="7"
      />
      <BtInput
        label="Point Penukaran"
        type="number"
        placeholder="Masukkan Point Penukaran"
        v-model="formAdd.point_required"
        :error="formAdd.errors.point_required"
        help="Masukkan Jumlah Point yg dibutuhkan untuk penukaran"
      />
      <BtSelect
        label="Pilih Status"
        v-model="formAdd.is_active"
        :error="formAdd.errors.is_active"
      >
        <option :value="true">Aktif</option>
        <option :value="false">Non Aktif</option>
      </BtSelect>
      <button class="btn btn-success float-end mt-3" type="submit">Tambah</button>
    </form>
  </BtModal>
</template>
