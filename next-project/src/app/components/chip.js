export default function Chip({ data }) {

    return (
        <>
            <div className="min-w-[50px] h-[26px] text-xs font-semibold flex justify-center items-center bg-[#4B5563] text-white rounded-full ">
                {data}
            </div>
        </>
    )
}
