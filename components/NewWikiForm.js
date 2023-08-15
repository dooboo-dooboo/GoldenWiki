import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export const WikiFormType = {
    Create: 'create',
    Edit: 'edit',
};

export default function WikiForm({
    type = WikiFormType.Create,
    initialValues = {
        title: '',
        content: '',
    },
    onSubmit,
}, wikis) {
    const {title, content} = initialValues;
    const [values, setValues] = useState({ title, content });
    const [isNew, setIsNew] = useState(true);

    const titleInput = useRef();
    const contentInput = useRef();

    useEffect(() => {
        if (title || content) {
            titleInput.current.value = title;
            titleInput.current.disabled = true;
            contentInput.current.value = content;
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        setIsNew(true);
        console.log(wikis);
        const wikisLength = Object.keys(wikis).length;
        for (let i = 0; i < wikisLength; i++) {
            wikis && wikis[i].map((element) => {
                if (element.title == values[0]) {
                    setIsNew(false);
                }
            });
        }
        
        if (isNew) {
            await onSubmit(values);
            setValues({
                title: '',
                content: '',
            });
        }
        
    }

    function handleTitleChange(e) {
        const {name, value} = e.target;
        setValues({
            title: value,
            content: values.content,
        });
    }

    function handleContentChange(e) {
        const {name, value} = e.target;
        setValues({
            title: values.title,
            content: value,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTitleChange} placeholder="GoldenWiki에 올릴 주제를 입력해주세요." ref={titleInput} className="full-x" />
                <textarea onChange={handleContentChange} placeholder="주제의 내용을 입력하세요." ref={contentInput} className="full-x full-y" ></textarea>
                <button>Upload</button>
            </form>
        </>
    )
}