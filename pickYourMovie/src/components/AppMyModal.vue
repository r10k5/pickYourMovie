<script setup lang="ts">
import AppLogo from './icons/AppLogo.vue';
import AppCloseIcon from './AppCloseIcon.vue';

</script>

<template>
    <Teleport to="body">
        <div class="app-my-modal-bg">
            <div class="app-my-modal">
                <AppLogo width="96" height="80" class="app-modal-logo" />
                <AppCloseIcon width="40" height="40" class="app-modal-close"/>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.app-modal-close {
    position: absolute;
    right: 16px;
    top: 16px;
}
.app-modal-logo {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.30));
    position: absolute;
    left: -36px;
    top: -32px;
}

.app-my-modal {
    width: 840px;
    height: 480px;
    background-color: #363636;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset, 0px 4px 1px 0px rgba(0, 0, 0, 0.25);
    position: relative;
}
.app-my-modal-bg {
    width: 100vw;
    height: 100vh;
    background-color:  rgba(31, 31, 31, 0.60);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>