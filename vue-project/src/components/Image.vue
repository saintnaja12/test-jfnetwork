<script>
export default {
    setup() {
        return {

        }
    },
}
</script>

<template>
    <div class="relative mx-auto w-[919px] max-w-[919px] h-[919px] max-h-[919px] bg-[#0066FF]">
        <div class="h-full grid grid-cols-2 p-5">
            <div class="box-1 -left-2.5 bg-[#0166DA] shadow-2xl relative border-t-[10px] border-l-[10px] border-[#000107]">
                <div class="flex justify-center items-center h-full text-[164px] text-[#020100]">
                    T
                </div>
            </div>
            <div class="bg-white border-t-[10px] border-[#000107]">
                <div class="flex justify-center items-center h-full text-[164px] text-[#404040]">
                    E
                </div>
            </div>
            <div class="bg-white border-b-[10px] border-[#000107]">
                <div class="flex justify-center items-center h-full text-[164px] text-[#404040]">
                    S
                </div>
            </div>
            <div class="box-1 -left-2.5 bg-[#0166DA] shadow-2xl border-b-[10px] border-r-[10px] border-[#000107]">
                <div class="flex justify-center items-center h-full text-[164px] text-[#020100]">
                    T
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box-1 {
    width: calc(100% + 10px);
}
</style>
