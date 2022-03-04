from rest_framework.routers import SimpleRouter
from Order import views

router = SimpleRouter()

router.register(r'basket', views.BasketView)
router.register(r'payment', views.PaymentView)
router.register(r'paymentedit', views.PaymentEditView)
router.register(r'favoriteProduct', views.FavoriteProductView)
router.register(r'proofoftransfer', views.ProofoftransferView)
router.register(r'silpimage', views.SilpImageView)
router.register(r'productpayment', views.ProductPaymentView)

urlpatterns = router.urls
