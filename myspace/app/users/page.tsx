import UserCard from "@/components/UserCard/UserCard";
import styles from "../page.module.css";
import { prisma } from "@/lib/prisma";

async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}

export default Users;
