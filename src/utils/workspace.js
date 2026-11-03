let workspace;
export function loadWorkspace() {
  if (!workspace) workspace = import('../components/canvas/InteractiveDesk');
  return workspace;
}
