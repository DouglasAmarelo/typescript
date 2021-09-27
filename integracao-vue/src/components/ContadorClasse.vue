<template>
  <div>
    <h1>Contador (Classe)</h1>
    <h2>{{ valor }}</h2>

    <h3>{{ getParOuImpar() }}</h3>
    <p>{{ parOuImpar }}</p>

    <button @click="setValor(-1)">Decrementar</button>
    &nbsp;
    <button @click="setValor(1)">Incrementar</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class ContadorClasse extends Vue {
  @Prop(Number) private readonly initialValue?: number;
  private valor: number = this.initialValue || 0;

  public setValor(delta: number) {
    this.valor += delta;
  }

  public getParOuImpar(): string {
    return this.valor % 2 === 0 ? 'Par' : 'Impar';
  }

  public get parOuImpar(): string {
    return this.valor % 2 === 0 ? 'Par' : 'Impar';
  }
}
</script>

<style></style>
