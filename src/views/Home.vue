<template>
    <div>
        <div class="hero is-cover is-relative is-fullheight-with-navbar is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">Hello, I'm Jacob.</h1>
                    <h3 class="subtitle is-3">A customer focused, entrepreneurially minded
                        developer with a passion for back-end development.</h3>
                    <router-link to="/projects">
                        <button class="button is-primary is-rounded is-light">
                            See Projects</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
}
</script>