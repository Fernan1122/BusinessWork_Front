<template>
  <div class="home">
    <h1 style="text-align: left; padding-left: 18rem; padding-bottom: 1rem;">Agregado recientemente</h1>
    <b-container class="col-7" style="min-width: 50rem; margin: center;">
      <b-row style="margin: center">
        <files-card style="margin: center"
          :name="files.name_doc"
          :exp="files.exp"
          :notif="files.notif"
          :descrip="files.descrip"
                    
          v-for="files in getDisplayFiles"
          :key="files.id"
        ></files-card>
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @input="paginate(currentPage)"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FilesCard from "@/components/FilesCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  async mounted() {
    this.getRecords();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    };
  },
  components: { "files-card": FilesCard },
  computed: {
    ...mapGetters(["getRows", "getDisplayFiles"])
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async getRecords() {
      await this.$store.dispatch("fetchFiles");
    }
  }
};
</script>
<style lang="scss" scoped>
// b-card {
// padding: 10px;
// }
.row {
  display: block !important;
}


</style>
