import { useState } from "react";
import RefundData from "../../../data/refunds.json"
import Input from "../../../components/common/Input/Input";
import SelectBox from "../../../components/common/SelectBox/SelectBox";
import Button from "../../../components/common/Button/Button";
import PageNation from "../../../components/common/Pagination/Pagination";
import Table from "../../../components/common/Table/Table";

const refundColumns = [
    {label:"환불ID", width: "w-20"},
    {label:"결제ID", },
    {label:"회원 이메일", },
    {label:"환불금액",  },
    {label:"사유", },
    {label:"요청일",  },
    {label:"상태",  }
];

const refundStatusOptions =[
    {label:"상태 전체", value:"all"},
    {label:"완료", value:"completed"},
    {label:"거절", value:"rejected"},
    {label:"요청", value:"requested"}
]

function getRefundStatusText(status: string){
    if(status === "completed") return "완료";
    if(status === "rejected") return "거절";
    if(status === "requested") return "요청";

    return status;

}

function Refund(){
    const [searchText, setSearchText] = useState("");
    const [keyword, setKeyword] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [showPage, setShowPage] = useState(1);

    const pageSize = 10;


    const handleSearch = () =>{
        setKeyword(searchText);
        setShowPage(1);
    }

    const handleStatusChange = (value: string)=>{
        setStatusFilter(value)
        setShowPage(1);
    }

    const filterRefund = RefundData.filter((refund)=>{
        const isSearchMatched = 
        refund.email.includes(keyword) ||
        refund.reason.includes(keyword);

        const isStatusMatched = 
            statusFilter === "all" || refund.status === statusFilter;

            return isSearchMatched && isStatusMatched;
    });

    const startIndex = (showPage - 1) * pageSize;
    const currentRefund = filterRefund.slice(startIndex, startIndex + pageSize);
    const totalPage = Math.ceil(filterRefund.length / pageSize);
    
    return(
        <>  
           <div className="flex h-full flex-col bg-slate-200">
                <p className="p-5 text-2xl font-bold text-black">환불 관리</p>
                <div className="m-4 flex gap-2">
                    <Input
                        id="refundsearch"
                        type="text"
                        value={searchText}
                        onChange={setSearchText}
                        placeholder="검색어 입력(이메일, 사유)"
                        onEnter={handleSearch}
                        className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                    />

                    <SelectBox
                        value={statusFilter}
                        onChange={handleStatusChange}
                        options={refundStatusOptions}
                        className="w-40"
                    />

                    <Button
                        onClick={handleSearch}
                        className="h-11 w-24 bg-indigo-600 text-white hover:bg-indigo-700">
                            검색
                    </Button>
                </div>
                <Table columns={refundColumns}>
                    {currentRefund.map((refund) => (
                        <tr key={refund.id} className="border-t border-slate-100">
                            <td className="px-4 py-3">{refund.id}</td>
                            <td className="px-4 py-3">{refund.paymentId}</td>
                            <td className="px-4 py-3 truncate">{refund.email}</td>
                            <td className="px-4 py-3">{refund.amount.toLocaleString()}원</td>
                            <td className="px-4 py-3">{refund.reason}</td>
                            <td className="px-4 py-3">{refund.requestedAt}</td>
                            <td className="px-4 py-3">{getRefundStatusText(refund.status)}</td>
                        </tr>
                    ))}


                </Table>
            <p className="text-sm text-slate-500">
              총 {filterRefund.length}건 · 페이지당 {pageSize}건
            </p>
            <PageNation
                showPage={showPage}
                totalPage={totalPage}
                onPageChange={setShowPage}
                />
            </div>
        
        </>
    )
}

export default Refund;