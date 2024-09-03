async function generateInfo() {
  console.log(text.value);
  const data = {
    contents: [{ parts: [{ text: text.value }] }],
  };
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC_uQya2uBTJJu_6nKS85SA2g4UZm097pw",
    {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  const result = await response.json();
  console.log(result.candidates[0].content.parts[0].text);

  const finalResponse = result.candidates[0].content.parts[0].text;
  card.innerText = finalResponse;
}
