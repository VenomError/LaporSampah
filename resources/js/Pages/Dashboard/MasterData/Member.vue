<script setup>
import PageTitle from "@components/PageTitle.vue";
import MemberListTable from "@components/Table/Account/MemberListTable.vue";
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
  <PageTitle title="List Member">
    <button type="button" @click="openModal" class="btn btn-success">
      Tambah Member
    </button>
  </PageTitle>
  <MemberListTable ref="tableRef" />

  <BtModal id="modal-add-member" title="Tambah Member" ref="modalAdd">
    <form @submit.prevent="addMember">
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
        label="Phone"
        type="tel"
        placeholder="Masukkan Phone"
        reloadTable
        v-model="formAdd.phone"
        :error="formAdd.errors.phone"
        help="Masukkan Phone"
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
