import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "max", name: "maxiii" },
    { id: "max2", name: "maxiii 2" },
  ];

  return (
    <div>
      <h1> The Client Page </h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
