import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export const WikiFormType = {
    Create: 'create',
    Edit: 'edit',
};


export default function WikiForm({
    wikis,
    type = WikiFormType.Create,
    initialValues = {
        title: '',
        content: '',
    },
    onSubmit,
    
}) {
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

    function findTitleInWiki(nowTitle) {
        for (let i = 0; i < Object.keys(wikis).length; i++) {
            if (wikis[i].title == nowTitle) {
                setIsNew(false);
                return;
            }
            
        }
        setIsNew(true);
    }

    useEffect(() => {
        if (type == WikiFormType.Create) {
            findTitleInWiki(values.title);
        }
    }, [values.title])

    async function handleSubmit(e) {
        e.preventDefault();
        if (isNew) {
            await onSubmit(values);
            setValues({
                title: '',
                content: '',
            });
        } else {
            alert("이미 존재하는 주제입니다.");
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