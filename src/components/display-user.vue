<template>
  <v-tooltip bottom>
    <template v-slot:activator="{on}">
        <v-chip v-on="on" color="accent">
          <v-avatar left>
            <v-img :src="blank"/>
          </v-avatar>
          {{user}}
        </v-chip>
    </template>
    <span>{{user}}</span>
  </v-tooltip>
</template>
<script>
export default {
  props: ['user']
}
</script>
