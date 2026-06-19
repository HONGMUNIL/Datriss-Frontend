import { useState } from "react";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import SelectBox from "../../../components/common/SelectBox/SelectBox";
import PayData from "../../../data/payments.json"
import Table from "../../../components/common/Table/Table";
import PageNation from "../../../components/common/Pagination/Pagination";



   const payColumns = [
        {label: "결제ID", width: "w-20"},
        {label: "회원 이메일", },
        {label: "상품명", },
        {label: "금액", },
        {label: "수단", },
        {label: "결제일", },
        {label: "상태", },
    ];

    const payStatusOptions = [
        {label:"상태 전체", value:"all"},
        {label:"완료", value:"completed"},
        {label:"취소", value:"canceled"},
        {label:"대기", value:"pending"}
    ];

    function getPayStatusText(status: string){
        if(status === "completed") return "완료"
        if(status === "canceled") return "취소"
        if(status === "pending") return "대기"
        
        return status;
    };




function Payments(){

const [searchText, setSearchText] = useState("");
const [keyword, setKeyword] = useState("");
const [statusFilter, setStatusFilter] = useState("all");
const [showPage, setShowPage] = useState(1);

const pageSize = 10;


const handleSearch =() =>{
    setKeyword(searchText);
    setShowPage(1);
}

const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setShowPage(1);
}

const filterPay = PayData.filter((pay) => {
    const isSearchMatched =
    pay.email.includes(keyword) ||
    pay.product.includes(keyword);

    const isStatusMatched = 
        statusFilter ==="all" || pay.status === statusFilter;

        return isSearchMatched && isStatusMatched;

});


const startIndex = (showPage -1) * pageSize;
const currentPay = filterPay.slice(startIndex, startIndex + pageSize);
const totalPage = Math.ceil(filterPay.length / pageSize);

    return(
        <>
            <div className="flex h-full flex-col bg-slate-200">
                <p className="p-5 text-2xl font-bold text-black">결제 내역</p>
                <div className="m-4 flex gap-2">
                    <Input
                        id="paysearch"
                        type="text"
                        value={searchText}
                        placeholder="검색어 입력(이메일, 상품명)"
                        onChange={setSearchText}
                        onEnter={handleSearch}
                        className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                        />

                    <SelectBox
                        value={statusFilter}
                        onChange={handleStatusChange}
                        options={payStatusOptions}
                        className="w-40"
                        />

                    <Button
                        onClick={handleSearch}
                        className="h-11 w-24 bg-indigo-600 text-white hover:bg-indigo-700">
                        검색
                    </Button>
                </div>

                <Table columns={payColumns}>
                    {currentPay.map((pay) => (
                        <tr key={pay.id} className="border-t border-slate-100">
                        <td className="px-4 py-3">{pay.id}</td>
                        <td className="px-4 py-3 truncate">{pay.email}</td>
                        <td className="px-4 py-3">{pay.product}</td>
                        <td className="px-4 py-3">{pay.amount}</td>
                        <td className="px-4 py-3">{pay.method}</td>
                        <td className="px-4 py-3">{pay.paidAt}</td>
                        <td className="px-4 py-3">{getPayStatusText(pay.status)}</td>
                        </tr>

                    ))}

                </Table>

                <PageNation
                    showPage={showPage}
                    totalPage={totalPage}
                    onPageChange={setShowPage}/>
            </div>
        </>
    )
}

export default Payments;