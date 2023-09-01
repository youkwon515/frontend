export async function GetPostList(): Promise<string[] | null> {
    try {
        const res = await fetch('/api/postList');
        const data: string[] = await res.json();
        return data;
        
    } catch(error) {
        console.error(error);
        return null;
    }
}

export async function GetPostContent(id: string | undefined): Promise<string | null> {
  if (!id) return null;

  try {
    const res = await fetch(`/api/postList/${id}`);
    const data: string = await res.text();
    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}