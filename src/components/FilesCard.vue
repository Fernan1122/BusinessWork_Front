<template>
  <div style="display: block;">
    <b-col style="margin: center; display: block;">
      <b-card
        
        tag="article"
        style="max-width: 100rem; min-width:40rem; display: block;"
        class="mb-3"
      >
        <div>
          <table>
            <tr>
              <td><img src="../assets/pdf-files.svg" height="50px" width="50px"></td>
              <td>
                <table id="table2">
                  <tr>
                    <td><strong>Nombre</strong></td>
                    <td>{{name}}</td>
                    <td><strong>Expiración</strong></td>
                    <td>{{exp}}</td>
                    <td><strong>Notificacion</strong></td>
                    <td>{{notif}}</td>
                  </tr>
                  <tr>
                    <td><strong>Subido por</strong></td>
                    <td>elquelosubio</td>
                    <td></td>
                    <td></td>
                    <td><strong>Descripción</strong></td>
                    <td>{{descrip}}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <b-button
            variant="primary"
            >Descargar</b-button>
            <b-button
            v-b-modal="modalId"
            variant="danger"
            >Eliminar</b-button>
          <b-modal :id="modalId" title="Eliminar Archivo">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </div>  
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name","exp", "notif", "descrip" ],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style scoped>
.row{
  display: block !important;
}
#table2{
  table-layout: fixed;
  width: 100%;
  text-align: center;
}

</style>
