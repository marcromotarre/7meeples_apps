import React from 'react'
import { useRouter, withRouter } from 'next/router'


export default () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <h1>Note {id} </h1>
    )
}

export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)
    if(!response.ok){
        res.writeHead(302, {
            Location: '/notes',
        })

        res.end();

        return {
            props: {}
        }
    }
    const {data} = await response.json()
    return {
        props: {note: data}
    }
}
