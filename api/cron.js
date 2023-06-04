export default function handler(req, res) {
  try {
    hitBackendAPi();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).end("Something went wrong while hitting the api");
  }
}

const hitBackendAPi = async () => {
  console.log(
    "Hitting backend api periodically using Vercel cron jobs feature"
  );
  console.log("Current hit time " + new Date().getTime().toLocaleString());
  fetch(
    "https://fastmart-backend.onrender.com/user/check/invalidmail@email.com"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("api response- " + JSON.stringify(data));
    })
    .catch((error) => {
      throw error;
    });
};
