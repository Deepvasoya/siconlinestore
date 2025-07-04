<template>
    <a-card :bordered="false" :style="{ background: bgOuterColor }">
        <figure class="custom-card-widget" >
            <a-space>
                <div class="custom-card-widget-icon" :style="{ background: bgColor }">
                    <slot name="image"></slot>
                </div>
                <figcaption>
                    <slot name="description"></slot>
                </figcaption>
            </a-space>
        </figure>
    </a-card>
</template>

<script>
export default {
    props: {
        bgColor: {
            type: String,
            default: "#5F63F2",
        },
        bgOuterColor: {
            type: String,
            default: "#FFFFFF",
        }
    }
};
</script>
