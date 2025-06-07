"use client";
import Button from "@/app/components/atoms/Button";
import ButtonForm from "@/app/components/atoms/ButtonForm";
import ProfilesList from "@/app/components/organisms/ProfilesList";
import VolunteerForm from "@/app/components/organisms/VolunteerForm";
import { User, UserPlus } from "lucide-react";
import { useDebugValue, useEffect, useState } from "react";

export default function Management() {
  const [users, setUsers] = useState([]);
  const [newVolunteerModal, setNewVolunteerModal] = useState(false);
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5001/volunteers");
    const data = await response.json();
    setUsers(data);
  };

  const toggleNewVolunteerModal = () => {
    console.log("toggleNewVolunteerModal");
    setNewVolunteerModal(!newVolunteerModal);
  };

  const newUser = async (data) => {
    const response = await fetch("http://localhost:5001/volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetchUsers();
    toggleNewVolunteerModal();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col  items-center text-(--foreground) bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg relative p-2 max-w-[28rem]">
      <Button
        type={"button"}
        onClick={toggleNewVolunteerModal}
        text={"Ajouter un nouveau bénévole"}
        lucide={<UserPlus />}
        classes={
          "bg-(--primary-color)  text-(--background) hover:bg-(--primary-color-hover) mb-2 max-w-[24rem]"
        }
      />
      <ProfilesList users={users} />
      {newVolunteerModal && (
        <VolunteerForm
          classes={"absolute"}
          onSubmit={newUser}
          title={"Ajouter un.e bénévole"}
        >
          <div className="flex flex-row gap-3 text-(--background)">
            <ButtonForm
              type="submit"
              text={"ajouter"}
              classes={
                "bg-(--primary-color)  hover:bg-(--primary-color-hover) mb-2"
              }
            />
            <Button
              type="button"
              onClick={toggleNewVolunteerModal}
              classes="bg-(--text-secondary)  hover:bg-(--text-secondary-hover) "
              text={"Annuler"}
            ></Button>
          </div>
        </VolunteerForm>
      )}
    </div>
  );
}
