
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  nickname: string;
  email: string;
}

export function User() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/users/findAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (

      <Router>
        <div className="relative">
          <div className="p-6 max-w-4xl mx-auto">
            {error && <div className="text-red-500">{error}</div>}
            <div className="mb-4">
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="border rounded">
                    <Table>
                      <TableHeader>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.nickname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                }
              />
            </Routes>
          </div>
          
        </div>
      </Router>
  );
}
