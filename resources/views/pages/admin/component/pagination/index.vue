<template layout="admin">
  <Head title="Pagination" />

  <PageSection header="Pagination Page">
    <PageTitle>Pagination</PageTitle>
    <PageDescription>Pagination component usage example.</PageDescription>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Pagination</h4>
          </div>
          <div class="card-body">
            <BasePagination :links="users.links" />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Pagination with resource collection</h4>
          </div>
          <div class="card-body">
            <BasePagination :links="collections.meta.links" />
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { PaginationLink } from "@/scripts/types/ui";
import PageDescription from "@/views/components/admin/layout/Page/PageDescription.vue";
import PageSection from "@/views/components/admin/layout/Page/PageSection.vue";
import PageTitle from "@/views/components/admin/layout/Page/PageTitle.vue";
import BasePagination from "@/views/components/admin/ui/Pagination/BasePagination.vue";
import { Head } from "@inertiajs/inertia-vue3";

type Users = {
  links: PaginationLink[];
};

type UsersCollection = {
  meta: {
    links: PaginationLink[];
  };
};

defineProps<{
  users: Users;
  collections: UsersCollection;
}>();
</script>
