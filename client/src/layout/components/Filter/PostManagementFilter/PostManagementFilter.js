import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { DatePickerFromTo, TagPicker } from '~/components/Form';
import Searchbar from '~/components/Form/Searchbar';

function PostManagementFilter() {
    const [TagSearchValue, setTagSearchValue] = useState('');
    const [PostSearchValue, setPostSearchValue] = useState('');
    const { handleSubmit, register } = useForm();
    const [, setSearchParams] = useSearchParams();

    const handleChangePostSearchInput = (e) => {
        setPostSearchValue(e.target.value);
    };

    const onSubmit = (data) => {
        setSearchParams(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} method="get">
                <div className="flex flex-wrap gap-4 justify-center">
                    <DatePickerFromTo register={register} />
                    <TagPicker value={TagSearchValue} register={register} onChange={setTagSearchValue} />
                </div>
                <div className="mt-5">
                    <Searchbar register={register} value={PostSearchValue} onChange={handleChangePostSearchInput} />
                </div>
            </form>
        </>
    );
}

export default PostManagementFilter;
