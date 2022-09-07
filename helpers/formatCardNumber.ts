export function cc_format(value: string) {
  if (value)
    return value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
}
