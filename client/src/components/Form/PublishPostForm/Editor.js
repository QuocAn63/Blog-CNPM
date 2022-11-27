import React, { useRef } from 'react'
import { Editor as TinyMCE } from '@tinymce/tinymce-react';

function Editor() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <TinyMCE
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>Nhập nội dung bài viết</p>"
                apiKey="xs9wwi1tubsgdaetnin1soclcdyaoaxna7nk4w67zbwubrz2"
                init={{
                    height: 500,
                    plugins: 'lists link image anchor searchreplace visualblocks code fullscreen insertdatetime table code help wordcount',
                    images_upload_url: 'postAcceptor.php',
                    images_upload_handler: function (blobInfo, success, failure) {
                        setTimeout(function () {
                            success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
                        }, 2000);
                    },
                    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |   removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    branding: false,
                    LockManager: false
                }}
            />
        </>
    );
}

export default Editor