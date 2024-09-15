




export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <div className="flex">
                <aside className="w-3/12 ml-20 my-10 bg-gray-200 rounded-md p-8">
                    <h3 className="text-center border-b border-orange-400 pb-2 mb-2">SideBar</h3>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos nostrum tempore numquam a. Possimus laboriosam similique enim magnam. Earum, dicta, quas maiores tempore ratione veritatis facere dolore provident rem nobis iste sapiente possimus expedita officia incidunt eligendi, culpa natus corrupti. Amet dolores doloribus rem incidunt est quidem sunt dolorum qui totam accusamus voluptatibus deserunt eaque quaerat sint ipsum exercitationem reprehenderit porro consequuntur, consectetur aspernatur obcaecati quibusdam. Doloremque optio veniam, iusto delectus itaque totam eveniet magnam dolorum. Ullam nam accusamus culpa sequi inventore minus illo veniam! Nobis incidunt iste eum dolore unde laudantium quasi quibusdam adipisci nemo fuga, quam iure perferendis ducimus officia aliquid culpa nulla non voluptatem deleniti </p>
                </aside>
                {children}
            </div>
        </html>
    );
}
