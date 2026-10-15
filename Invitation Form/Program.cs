var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

var invitations = new List<Invitation>();

app.MapGet("/submit-invite", (string name, int age, string email, string phone) => {
    invitations.Add(new Invitation
    {
        Name = name,
        Age = age,
        Email = email,
        Phone = phone
    });

    return Results.Redirect("/thanks.html");
});

app.Run();

class Invitation
{
    public string? Name { get; set; }
    public int Age { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
}