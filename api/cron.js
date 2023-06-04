
export default function handler(req, res) {
    res.status(200).end(JSON.stringify(hitBackendAPi()));
  }

const hitBackendAPi = async () => {
    console.log("Hitting backend api periodically using Vercel cron jobs feature");
    console.log("Current hit time "+ new Date().getTime());
    const response = await fetch(
      "https://fastmart-backend.onrender.com/user/check/invalidmail@email.com"
    );
    const data = await response.json();
    return data;
};