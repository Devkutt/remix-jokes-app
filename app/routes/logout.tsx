import { ActionFunction, redirect } from "remix";

import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({
  request,
}) => {
  await logout(request);

  return redirect('login');
};