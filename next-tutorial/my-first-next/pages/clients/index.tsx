import React from "react";
import Link from 'next/link';

const clients = [
    {id: "max", name:"likui"},
    {id: 'meau', name: "Manuel"}
]
export default function ClientsPage() {
  return <div>The Clients Page
      <ul>
          {clients.map(client => <li key={client.id}>
              <Link href={{
                  pathname: '/clients/[id]',
                  query: {id: client.id}}}>{client.name}</Link>
          </li>)}
      </ul>
  </div>;
}
