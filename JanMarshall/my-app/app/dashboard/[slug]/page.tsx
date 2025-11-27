type Params = Promise<{ slug: string }>;

import { Counter } from "@/app/component/Counter";
export default async function DashboardRoute({ params }: { params: Params }) {

    const { slug } = await params;

    return (
        <>
            <h4>Hello from the slug page with param {slug}</h4>
            <Counter />
        </>
    )
}