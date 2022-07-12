export const authRoles = {
  sa: ["SA"],
  admin: ["ADMIN", "Essentiel","Performance", "Expert"],
  editor: ["SA", "ADMIN", "EDITOR"],
  guest: ["guest"],
  membre: ["membre", "Expert", "Essentiel"],
  Expert: ["Expert", "admin"],
  Performance: ["Performance", "Expert", "admin"],
  Essentiel: ["Essentiel","Performance", "Expert", "admin"],
};
