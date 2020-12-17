<template>

    <div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="d-flex justify-content-center p-2">
                    <div class="flip-card-front">
                        <img :src="member.image" alt="foto del equipo" height="150" width="150">
                        <div class="card-body">
                            <h5 class="card-title">{{ member.nombre }}</h5>        
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <p class="card-text"> {{ member.descripcion}} </p>
                        <div class="card-footer">
                            <small class="text-muted"> Rol: {{ member.rol}} </small>
                            <br>
                            <small class="text-muted"> Codigo: {{ member.codigo}} </small>
                            <br>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>    
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>
</style>