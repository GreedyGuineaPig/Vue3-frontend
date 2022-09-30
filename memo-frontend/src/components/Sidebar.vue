<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
        <span class="material-symbols-outlined">bolt</span>
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-symbols-outlined">double_arrow</span>
        </button>
    </div>
    <h3>menu</h3>
    <div class="menu">
        <router-link class="button" to="/">
            <span class="material-symbols-outlined">home</span>
            <span class="text">home</span>
        </router-link>
        <router-link class="button" to="/about">
            <span class="material-symbols-outlined">folder</span>
            <span class="text">about</span>
        </router-link>
        <router-link class="button" to="/team">
            <span class="material-symbols-outlined">group</span>
            <span class="text">Team</span>
        </router-link>
        <router-link class="button" to="/contact">
            <span class="material-symbols-outlined">email</span>
            <span class="text">contact</span>
        </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu">
        <router-link class="button" to="/setting">
            <span class="material-symbols-outlined">settings</span>
            <span class="text">setting</span>
        </router-link>

    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>


<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo{
        margin-bottom: 1rem;
        img{
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
            
            .material-symbols-outlined {
                transition: 0.2s ease-out;
                font-size: 2rem;
                color: var(--light);
            }

            &:hover {
            .material-symbols-outlined{
                color: var(--primary);
                transform: translateX(0.5rem);
            }
        }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: 0.3s;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--light);
                margin-right: 1rem;
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, ~&.router-link-exact-active{
                background-color: var(--dark-alt);

                .material-symbols-outlined, .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary); 
            }
        }
    }

    .flex {
        flex: 1 1 0;
    }

    &.is-expanded {
		width: var(--sidebar-width);
        .menu-toggle-wrap{
            top: -3rem;

        }
        .menu-toggle{
            transform: rotate(-180deg);
        }
        h3, .button .text {
            opacity: 1;
            transition: 0.3s;
        }

        .menu {
            .material-symbols-outlined {
                margin-right: 1rem;
            }
        }
        

    }

    @media (max-width: 768px){
        position: fixed;
        z-index: 99;
    }
}
</style>