<script setup>
import PageTitle from "@components/PageTitle.vue";
import AdminListTable from "@components/Table/Account/AdminListTable.vue";
import BtModal from "../../../Components/BtModal.vue";
import BtInput from "../../../Components/BtInput.vue";
import { route } from "@route";
import { Link, router, useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const modalAdd = ref(null);
const tableRef = ref(null);
const openModal = () => {
  modalAdd.value.open();
};

const formAdd = useForm({
  email: "",
  password: "",
  status: "",
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
  <PageTitle title="List Admin">
    <button type="button" @click="openModal" class="btn btn-success">Tambah Admin</button>
  </PageTitle>
  <AdminListTable ref="tableRef" />
  <BtModal id="modal-add-admin" title="Tambah Admin" ref="modalAdd">
    <form @submit.prevent="addAdmin">
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
        help="Masukkan Password"
      />
      <button class="btn btn-success float-end mt-3" type="submit">Tambah</button>
    </form>
  </BtModal>
</template>
