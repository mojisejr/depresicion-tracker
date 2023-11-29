import { prisma } from "../../../prisma";
export const fetchMenu = async () => {
  const menu = await prisma.building.findMany({
    include: {
      floors: {
        include: {
          rooms: true,
        },
      },
    },
  });

  if (menu.length <= 0) {
    return [];
  }

  return menu;
};

{
  /* <li>
            <details>
              <summary>Building 1</summary>
              <ul>
                <li>
                  <a>Floor 1</a>
                </li>
                <li>
                  <a>Floor 2</a>
                </li>
                <li>
                  <details>
                    <summary>Floor 3</summary>
                    <ul>
                      <li>
                        <a>Room 1</a>
                      </li>
                      <li>
                        <a>Room 2</a>
                      </li>
                      <li>
                        <a>Room 3</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li> */
}
