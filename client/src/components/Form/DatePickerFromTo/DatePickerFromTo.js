import React from 'react'
import FormInput from '../FormInput'

function DatePickerFromTo({ register }) {

    return (
        <div className="inline-block border border-gray-300 bg-white rounded focus-within:border-sky-600">
            <label className="inline-block px-3 text-sm">
                <FormInput type="date" name="createdFrom" rightLabel="Từ" register={register} />
            </label>
            <span>-</span>
            <label className="inline-block px-3 text-sm">
                <FormInput type="date" name="createdTo" rightLabel="Đến" register={register} />
            </label>
        </div>
    )
}

export default DatePickerFromTo