<script setup>
import PageTitle from "@components/PageTitle.vue";
import OperatorListTable from "@components/Table/Account/OperatorListTable.vue";
import BtModal from "@components/BtModal.vue";
import BtInput from "@components/BtInput.vue";
import { route } from "@route";
import { useForm } from "@inertiajs/vue3";
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
  <PageTitle title="List Operator">
    <button type="button" @click="openModal" class="btn btn-success">
      Tambah Operator
    </button>
  </PageTitle>
  <OperatorListTable ref="tableRef" />

  <BtModal id="modal-add-operator" title="Tambah Operator" ref="modalAdd">
    <form @submit.prevent="addOperator">
      <BtInput
        label="Name"
        type="text"
        placeholder="Masukkan Nama"
        reloadTable
        v-model="formAdd.name"
        :error="formAdd.errors.name"
        help="Masukkan Nama"
      />
      <BtInput
        label="Email"
        type="email"
        placeholder="Masukkan Email"
        v-model="formAdd.email"
        :error="formAdd.errors.email"
        help="Masukkan Email"
      />
      <BtInput
        label="Password"
        placeholder="Masukkan Password"
        type="password"
        v-model="formAdd.password"
        :error="formAdd.errors.password"
        help="Masukkan Password (default 'password')"
      />
      <button class="btn btn-success float-end mt-3" type="submit">Tambah</button>
    </form>
  </BtModal>
</template>
