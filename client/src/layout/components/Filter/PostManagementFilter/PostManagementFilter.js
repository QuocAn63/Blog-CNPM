import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function PostManagementFilter() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <label>
                <span className="mr-2">Từ</span>
                <input type="date" />
            </label>
        </div>
    )
}

export default PostManagementFilter