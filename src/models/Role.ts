export interface RoleFromAPI {
  id: number
  name: string
  shortname: string
}

export class Role {
  public constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly shortName: string
  ) {}

  public static fromAPI (data: RoleFromAPI): Role {
    return new Role(
      data.id,
      data.name,
      data.shortname
    );
  }
}
