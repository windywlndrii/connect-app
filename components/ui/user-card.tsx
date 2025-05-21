export default function UserCard() {
    return (
        <div className ="border border-black rounded-lg p-2 flex justify-between items-center user-card">
        <div className="user-info">
            <h2 className="text-[18px] font-bold mb-[1px]">Rahmat Saudi Al Fathir As</h2>
            <p className="text-base text-black mb-2">rahmatsaudi@universitasmulia.ac.id</p>
            <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Admin</span>
            <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Employee</span>
        </div>
        <span className="bold-text status text-[16px]">Aktif</span>
    </div>  
    );
}