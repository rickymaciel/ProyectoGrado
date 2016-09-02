namespace RegionalFF.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using RegionalFF.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<RegionalFF.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(RegionalFF.Models.ApplicationDbContext context)
        {
            //Crear Menu
            context.Menus.AddOrUpdate(
                p => p.Nombre,
              new Models.Menu
              {
                  //1
                  PadreId = 0,
                  Nombre = "Navegaci�n",
                  Descripcion = "Men� de Navegaci�n del Sistema <Usuario>",
                  Accion = "",
                  Controlador = "",
                  Activo = true
              });

            //Crear MenuAdmins
            context.MenuAdmins.AddOrUpdate(
                p => p.Nombre,
              new Models.MenuAdmin
              {
                  //1
                  PadreId = 0,
                  Nombre = "Men� Administrador",
                  Descripcion = "M�dulo Administrador del Men� Admin del Sistema",
                  Accion = "",
                  Controlador = "",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //2
                  PadreId = 0,
                  Nombre = "Men� Usuario",
                  Descripcion = "M�dulo Administrador del Men� Usuario del Sistema",
                  Accion = "",
                  Controlador = "",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //3
                  PadreId = 1,
                  Nombre = "Men� Administrador",
                  Descripcion = "Listado del Men� Administrador del Sistema",
                  Accion = "Index",
                  Controlador = "Accesos",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //4
                  PadreId = 2,
                  Nombre = "Men� Usuario",
                  Descripcion = "Listado del Men� Usuario del Sistema",
                  Accion = "Index",
                  Controlador = "Menus",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //5
                  PadreId = 1,
                  Nombre = "Crear Men�",
                  Descripcion = "Crear Men� Administrador del Sistema",
                  Accion = "Create",
                  Controlador = "Accesos",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //6
                  PadreId = 1,
                  Nombre = "Oficinas",
                  Descripcion = "Gestionar Oficinas",
                  Accion = "Index",
                  Controlador = "Oficinas",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //7
                  PadreId = 1,
                  Nombre = "Roles",
                  Descripcion = "Gestionar Roles",
                  Accion = "Roles",
                  Controlador = "Admin",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //8
                  PadreId = 1,
                  Nombre = "Usuarios",
                  Descripcion = "Gestionar Usuarios del Sistema",
                  Accion = "Index",
                  Controlador = "Admin",
                  Activo = true
              },
              new Models.MenuAdmin
              {
                  //9
                  PadreId = 2,
                  Nombre = "Crear Men�",
                  Descripcion = "Crear Men� Usuario del Sistema",
                  Accion = "Create",
                  Controlador = "Menus",
                  Activo = true
              });

            //Crear si no existe Administraci�n del Sistema
            if (!context.Oficinas.Any(r => r.Nombre == "Administraci�n del Sistema"))
            {
                context.Oficinas.AddOrUpdate(
                    p => p.Nombre,
                    new Models.Oficina
                    {
                        //1
                        Id = 1,
                        Nombre = "Administraci�n del Sistema",
                        Sigla = "AS",
                        Departamento = "'",
                        Ciudad = "-",
                        Direccion = "-",
                        Telefono = "-"
                    }
                );
            }

            //Crear si no existe Oficina Regional de Encarnaci�n
            if (!context.Oficinas.Any(r => r.Nombre == "Oficina Regional de Encarnaci�n"))
            {
                context.Oficinas.AddOrUpdate(
                    p => p.Nombre,
                    new Models.Oficina
                    {
                        //1
                        Id = 1,
                        Nombre = "Oficina Regional de Encarnaci�n",
                        Sigla = "ORE",
                        Departamento = "Itap�a",
                        Ciudad = "Encarnaci�n",
                        Direccion = "Costanera Padre Bolik",
                        Telefono = "071202889"
                    }
                );
            }


            //Crear si no existe Rol Administrador
            if (!context.Roles.Any(r => r.Name == "Administrador"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Administrador" };

                manager.Create(role);
            }


            //Crear si no existe Rol Facilitador
            if (!context.Roles.Any(r => r.Name == "Facilitador"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Facilitador" };

                manager.Create(role);
            }

            //Crear si no existe Rol Fiscalizador
            if (!context.Roles.Any(r => r.Name == "Fiscalizador"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Fiscalizador" };

                manager.Create(role);
            }

            //Crear Usuario
            if (!context.Users.Any(u => u.Email == "rmacielb3@gmail.com"))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser { Email = "rmacielb3@gmail.com", UserName = "rmacielb3@gmail.com", OficinaId = 1, Numero = 246, Nombre = "Ricardo", Apellido = "Maciel" };

                manager.Create(user, "1Regional/");
                //Delegador Administrador a usuario
                manager.AddToRole(user.Id, "Administrador");
            }
        }
    }
}
