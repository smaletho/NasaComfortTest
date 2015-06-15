using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheArtOfDev;

namespace TestNasa.Controllers
{
    public class TrainingController : Controller
    {
        //
        // GET: /Training/

        public ActionResult Index()
        {
            TrainingModel model = new TrainingModel();

            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];

                //check if page is bookmarked
                string checkBookmark = "bookmark_" + model.Nav_A.ToString() + "_" + model.Nav_B.ToString() + "_" + model.Nav_C.ToString();

                if (model.BookmarkList.Contains(checkBookmark))
                    model.PageIsBookmarked = true;
            }
            else
            {
                //start from scratch
                model.Nav_A = 1;
                model.Nav_B = 1;
                model.Nav_C = 1;

                model.BookmarkList = new List<string>();
                model.PageIsBookmarked = false;

            }

            Session["CurrentPageModel"] = model;

            return View("Index", model);
        }

        public ActionResult SetPage(int a, int b, int c)
        {
            //get current session variable
            TrainingModel model = new TrainingModel();

            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];
                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;

                //check if page is bookmarked
                string checkBookmark = "bookmark_" + model.Nav_A.ToString() + "_" + model.Nav_B.ToString() + "_" + model.Nav_C.ToString();

                if (model.BookmarkList.Contains(checkBookmark))
                    model.PageIsBookmarked = true;
                else
                    model.PageIsBookmarked = false;
            }
            else
            {
                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
            }

            

            Session["CurrentPageModel"] = model;

            return PartialView("Index", model);
            
        }

        public ActionResult CreateImage(int a, int b, int c, double scale)
        {
            string imageUrl = "Content/Screenshots/" + a.ToString() + "-" + b.ToString() + "-" + c.ToString() + ".png";
                        
            ImageAnnotateModel model = new ImageAnnotateModel();
            model.ImageString = imageUrl;
            model.DocumentScale = scale;
            
            return View("ImageEdit", model);
        }

        public ActionResult ImageEdit()
        {
            return View("ImageEdit");
        }

        





        public ActionResult NewIndex()
        {
            TrainingModel model = new TrainingModel();
            //model.Nav_A = 1;
            //model.Nav_B = 1;
            //model.Nav_C = 1;
            //model.Nav_D = 1;

            //model.BookmarkList = new List<string>();
            //model.PageIsBookmarked = false;

            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];

                //check if page is bookmarked
                string checkBookmark = "bookmark_" + model.Nav_A.ToString() + "_" + model.Nav_B.ToString() + "_" + model.Nav_C.ToString() + "_" + model.Nav_D.ToString();

                model.PageIsBookmarked = IsPageBookmarked(model.NewBookmarkList, checkBookmark);
            }
            else
            {
                //start from scratch
                
                model.Nav_A = 1;
                model.Nav_B = 1;
                model.Nav_C = 1;
                model.Nav_D = 1;

                model.NewBookmarkList = new List<BookmarkObject>();
                model.PageIsBookmarked = false;

            }

            Session["CurrentPageModel"] = model;

            return View("Index2", model);
        }

        public ActionResult NewSetPageString(string id)
        {
            string[] arr;

            arr = id.Split('_');
            //arr[0] = bookmark
            //arr[1] = l1
            //arr[2] = l2
            //arr[3] = l3
            //arr[4] = l4

            int a = Convert.ToInt32(arr[1]);
            int b = Convert.ToInt32(arr[2]);
            int c = Convert.ToInt32(arr[3]);
            int d = Convert.ToInt32(arr[4]);

            TrainingModel model = new TrainingModel();

            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];
                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
                model.Nav_D = d;

                //check if page is bookmarked
                string checkBookmark = "bookmark_" + a.ToString() + "_" + b.ToString() + "_" + c.ToString() + "_" + d.ToString();

                model.PageIsBookmarked = IsPageBookmarked(model.NewBookmarkList, checkBookmark);
            }
            else
            {
                //start from scratch

                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
                model.Nav_D = d;

                model.NewBookmarkList = new List<BookmarkObject>();
                model.PageIsBookmarked = false;

            }

            Session["CurrentPageModel"] = model;

            return View("Index2", model);
        }
        public ActionResult NewSetPageInt(int a, int b, int c, int d)
        {
            TrainingModel model = new TrainingModel();

            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];
                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
                model.Nav_D = d;

                //check if page is bookmarked
                string checkBookmark = "bookmark_" + a.ToString() + "_" + b.ToString() + "_" + c.ToString() + "_" + d.ToString();

                model.PageIsBookmarked = IsPageBookmarked(model.NewBookmarkList, checkBookmark);
            }
            else
            {
                //start from scratch

                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
                model.Nav_D = d;

                model.NewBookmarkList = new List<BookmarkObject>();
                model.PageIsBookmarked = false;

            }

            Session["CurrentPageModel"] = model;

            return View("Index2", model);
        }

        //Starting Helper Actions here
        public ActionResult GetNavigationTitle(int nav)
        {
            string retStr = "";

            switch (nav)
            {
                case 1:
                    retStr = "FUNDOSCOPY";
                    break;
                case 2:
                    retStr = "KIDNEY & BLADDER";
                    break;
                case 3:
                    retStr = "INTUBATION";
                    break;
                case 4:
                    retStr = "IV INSERTION";
                    break;
            }

            return Content(retStr);
        }
        public ActionResult GetNavigationImage(int nav)
        {
            ViewBag.Nav_A = nav;

            return View("NavigationImage");
        }
        public ActionResult GetLevel1Navigation(int nav)
        {
            ViewBag.Nav = nav;
            return View("Level1Navigation");
        }
        public ActionResult GetLevel2Navigation(int nav_a, int nav_b)
        {
            ViewBag.Nav_A = nav_a;
            ViewBag.Nav_B = nav_b;

            return View("Level2Navigation");
        }
        public ActionResult GetLevel3Navigation(int nav_a, int nav_b, int nav_c)
        {
            ViewBag.Nav_A = nav_a;
            ViewBag.Nav_B = nav_b;
            ViewBag.Nav_C = nav_c;

            return View("Level3Navigation");
        }
        public ActionResult GetLevel4Navigation(int nav_a, int nav_b, int nav_c, int nav_d)
        {
            ViewBag.Nav_A = nav_a;
            ViewBag.Nav_B = nav_b;
            ViewBag.Nav_C = nav_c;
            ViewBag.Nav_D = nav_d;

            return View("Level4Navigation");
        }
        public ActionResult GetContent(int nav_a, int nav_b, int nav_c, int nav_d)
        {
            string checkBookmark = "bookmark_" + nav_a.ToString() + "_" + nav_b.ToString() + "_" + nav_c.ToString() + "_" + nav_d.ToString();

            TrainingModel model = new TrainingModel();
            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];

                //check if page is bookmarked
                

                model.PageIsBookmarked = IsPageBookmarked(model.NewBookmarkList, checkBookmark);
                if (model.PageIsBookmarked)
                {
                    ViewBag.BookmarkNotes = GetBookmarkNotes(model.NewBookmarkList, checkBookmark);
                    ViewBag.BookmarkTitle = GetBookmarkTitle(model.NewBookmarkList, checkBookmark);
                }
            }
            else
            {
                //start from scratch
                model.Nav_A = 1;
                model.Nav_B = 1;
                model.Nav_C = 1;
                model.Nav_D = 1;

                model.NewBookmarkList = new List<BookmarkObject>();
                model.PageIsBookmarked = false;

            }

            Session["CurrentPageModel"] = model;

            ViewBag.Nav_A = nav_a;
            ViewBag.Nav_B = nav_b;
            ViewBag.Nav_C = nav_c;
            ViewBag.Nav_D = nav_d;
            ViewBag.IsBookmarked = model.PageIsBookmarked;
            ViewBag.BookmarkId = checkBookmark;

            ViewBag.EdgeClass = "EDGE-8837070";
            ViewBag.FileName = "guide_" + nav_a.ToString() + nav_b.ToString() + nav_c.ToString() + nav_d.ToString();

            if (ViewBag.FileName == "guide_2111"
                || ViewBag.FileName == "guide_2211"
                || ViewBag.FileName == "guide_2212")
            {
                ViewBag.HasContent = true;
            }
            else
            {
                ViewBag.HasContent = false;
            }

            return View("ContentView");
        }
        public ActionResult RenderBookmarks()
        {
            TrainingModel model = new TrainingModel();
            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];
            }
            else
            {
                //start from scratch
                model.Nav_A = 1;
                model.Nav_B = 1;
                model.Nav_C = 1;
                model.Nav_D = 1;

                model.NewBookmarkList = new List<BookmarkObject>();
                model.PageIsBookmarked = false;

            }

            Session["CurrentPageModel"] = model;

            return View("BookmarksView", model);
        }
        public ActionResult AddBookmark(int a, int b, int c, int d, string user_title, string nav_title, string notes)
        {
            TrainingModel model = new TrainingModel();
            if (Session["CurrentPageModel"] != null)
            {
                //get current model, add bookmark to list
                model = (TrainingModel)Session["CurrentPageModel"];
                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
                model.Nav_D = d;

                BookmarkObject obj = new BookmarkObject();
                obj.BookmarkId = "bookmark_" + a.ToString() + "_" + b.ToString() + "_" + c.ToString() + "_" + d.ToString();
                obj.UserNotes = notes;
                obj.UserTitle = user_title;
                obj.NavTitle = nav_title;
                obj.LoadUrl = "";

                model.NewBookmarkList.Add(obj);
                
            }
            else
            {
                model.Nav_A = a;
                model.Nav_B = b;
                model.Nav_C = c;
                model.Nav_D = d;

                model.BookmarkList = new List<string>();

                string newBookmark = "bookmark_" + a.ToString() + "_" + b.ToString() + "_" + c.ToString() + "_" + d.ToString();


                BookmarkObject obj = new BookmarkObject();
                obj.BookmarkId = "bookmark_" + a.ToString() + "_" + b.ToString() + "_" + c.ToString() + "_" + d.ToString();
                obj.UserNotes = notes;
                obj.UserTitle = user_title;
                obj.NavTitle = nav_title;
                obj.LoadUrl = "";

                model.NewBookmarkList.Add(obj);

            }

            Session["CurrentPageModel"] = model;

            return Content("success");
        }
        public ActionResult RemoveBookmark(string id)
        {
            TrainingModel model = new TrainingModel();
            if (Session["CurrentPageModel"] != null)
            {
                //get current model, add bookmark to list
                model = (TrainingModel)Session["CurrentPageModel"];

                foreach (var bookmark in model.NewBookmarkList)
                {
                    if (bookmark.BookmarkId == id)
                    {
                        model.NewBookmarkList.Remove(bookmark);
                        Session["CurrentPageModel"] = model;

                        return Content("actual success");
                        
                    }
                }

            }

            Session["CurrentPageModel"] = model;
            return Content("not really success");
        }
        public ActionResult GetBookmarkNotesAjax(string id)
        {
            string retStr = "";
            TrainingModel model = new TrainingModel();
            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];
                foreach(var bookmark in model.NewBookmarkList)
                {
                    if(bookmark.BookmarkId == id)
                        retStr = bookmark.UserNotes;
                }
            }
            else
            {
                retStr = "An issue occurred.";

            }

            return Content(retStr);
        }

        public ActionResult SaveNotes(string notes, string id)
        {
            TrainingModel model = new TrainingModel();
            if (Session["CurrentPageModel"] != null)
            {
                model = (TrainingModel)Session["CurrentPageModel"];

                foreach (var bookmark in model.NewBookmarkList)
                {
                    if (bookmark.BookmarkId == id)
                        bookmark.UserNotes = notes;
                }
            }

            Session["CurrentPageModel"] = model;

            return Content("success");
        }

        public bool IsPageBookmarked(List<BookmarkObject> ls, string checkBookmark)
        {
            foreach (var bookmark in ls)
            {
                if (bookmark.BookmarkId == checkBookmark)
                    return true;
            }

            return false;
        }
        public string GetBookmarkNotes(List<BookmarkObject> ls, string checkBookmark)
        {
            foreach (var bookmark in ls)
            {
                if (bookmark.BookmarkId == checkBookmark)
                    return bookmark.UserNotes;
            }

            return "N/A";
        }
        public string GetBookmarkTitle(List<BookmarkObject> ls, string checkBookmark)
        {
            foreach (var bookmark in ls)
            {
                if (bookmark.BookmarkId == checkBookmark)
                    return bookmark.UserTitle;
            }

            return "N/A";
        }





        public string GetHeadContent(int a, int b, int c, int d)
        {
            string buildFileName = "guide_" + a.ToString() + b.ToString() + c.ToString() + d.ToString();

            return "";
        }
        public string GetBodyDiv(int a, int b, int c, int d)
        {
            string buildFileName = "guide_" + a.ToString() + b.ToString() + c.ToString() + d.ToString();

            return "";
        }
        
    }

    [Serializable]
    public class TrainingModel
    {
        public int Nav_A { get; set; }
        public int Nav_B { get; set; }
        public int Nav_C { get; set; }
        public int Nav_D { get; set; }

        public List<string> BookmarkList { get; set; }
        public List<BookmarkObject> NewBookmarkList { get; set; }
        public bool PageIsBookmarked { get; set; }
    }

    public class BookmarkObject
    {
        public string BookmarkId { get; set; }
        public string UserTitle { get; set; }
        public string UserNotes { get; set; }
        public string LoadUrl { get; set; }
        public string NavTitle { get; set; }
    }

    public class ImageAnnotateModel
    {
        public string ImageString { get; set; }
        public double DocumentScale { get; set; }
    }

    public class ContentModel
    {
        public int Nav_A { get; set; }
        public int Nav_B { get; set; }
        public int Nav_C { get; set; }
        public int Nav_D { get; set; }

        public bool IsBookmarked { get; set; }
        public string BookmarkId { get; set; }
        public string BookmarkNotes { get; set; }
        public string BookmarkTitle { get; set; }

        public List<BookmarkObject> NewBookmarkList { get; set; }

        public string EdgeClass { get; set; }
        public string FileName { get; set; }
    }
}
