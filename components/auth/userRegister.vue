<template>
  <v-card width="1000">
    <v-card-title>
      Registro de Usuarios
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="user.nombre"
            label="Nombre"
            outlined
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="user.apaterno"
            label="Ap. Paterno"
            outlined
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="user.amaterno"
            label="Ap. Materno"
            outlined
          />
        </v-col>
      </v-row>
      <v-text-field
        v-model="user.telefono"
        label="Teléfono"
        outlined
      />
      <v-text-field
        v-model="user.direccion"
        label="Dirección"
        outlined
      />
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="user.ciudad"
            label="Ciudad"
            outlined
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="user.estado"
            label="Estado"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="user.usuario"
            label="Usuario"
            outlined
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="user.password"
            label="Password"
            outlined
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="register">
        Registrarse
      </v-btn>
      <v-btn color="secondary" to="/">
        Regresar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      user: {
        nombre: '',
        apaterno: '',
        amaterno: '',
        direccion: '',
        telefono: '',
        ciudad: '',
        estado: '',
        usuario: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      const response = await this.$axios.post('/users/create', this.user)
      console.log(response)
      if (response && response.data && response.data.id) {
        this.$store.commit('alert/setAlert', { message: 'Usuario Registrado Satisfactoriamente', type: 'success' })
      }
    }
  }
}
</script>

<style scoped>
</style>
